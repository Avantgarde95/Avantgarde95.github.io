C++에서 트리를 만들때, 스마트 포인터 `std::shared_ptr`를 활용하면 자식 노드의 메모리 해제를 직접 해주지 않아도 될 뿐만 아니라 여러 트리가 한 노드를 참조하는 상황에서도 알아서 메모리가 해제되도록 할 수 있다.

When creating a tree in C++, if you use the smart pointer `std::shared_ptr`, you don't have to release the memory of each child node directly, and you can let the program to automatically release the memory even when multiple trees refer to one node.

```cpp
#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <memory>

class Node {
public:
    Node(const std::string& name): m_name(name) {
        // Do nothing.
    }

    void print(int level = 0) {
        printThis(level);
        printChilds(level);
    }

    void addChild(const std::shared_ptr<Node>& child) {
        m_childs.push_back(child);
    }

private:
    void printThis(int level) {
        std::stringstream ss;

        for (int i = 0; i < level - 1; i++) {
            ss << "   ";
        }

        if (level > 0) {
            ss << "|- ";
        }

        ss << m_name << "\n";
        std::cout << ss.str();
    }

    void printChilds(int level) {
        for (auto child: m_childs) {
            child->print(level + 1);
        }
    }

private:
    std::string m_name;
    std::vector<std::shared_ptr<Node>> m_childs;
};
```

아래와 같이 트리 두 개를 만들어 보자. 두 트리는 노드 4를 공유한다.

Let's create two trees as shown below. The trees share node 4.

**Tree**

```
Tree 1: 0 - 1 - 2
            |
            3 - 4 - 5
                |
Tree 2: 6 ------+
                |
                7 - 8
                |
                9 - 10 - 11
```

**Code**

```cpp
int main() {
    std::vector<std::shared_ptr<Node>> nodes;

    for (int i = 0; i <= 11; i++) {
        nodes.push_back(std::make_shared<Node>(std::to_string(i)));
    }

    // Tree 1.
    nodes[0]->addChild(nodes[1]);
    nodes[0]->addChild(nodes[3]);
    nodes[1]->addChild(nodes[2]);
    nodes[3]->addChild(nodes[4]);
    nodes[4]->addChild(nodes[5]);

    // Tree 2.
    nodes[6]->addChild(nodes[4]);
    nodes[6]->addChild(nodes[7]);
    nodes[6]->addChild(nodes[9]);
    nodes[7]->addChild(nodes[8]);
    nodes[9]->addChild(nodes[10]);
    nodes[10]->addChild(nodes[11]);

    nodes[0]->print();
    nodes[6]->print();

    return 0;
}
```

프로그램은 아래와 같은 결과를 출력할 것이다.
[Valgrind](https://valgrind.org/)를 사용하여 메모리 누수가 없음을 확인할 수 있다.

The program will print the following output.
You can use [Valgrind](https://valgrind.org/) to confirm that there is no memory leak.

```
0
|- 1
   |- 2
|- 3
   |- 4
      |- 5
6
|- 4
   |- 5
|- 7
   |- 8
|- 9
   |- 10
      |- 11
```
