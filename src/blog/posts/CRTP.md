C++에서 **CRTP**(묘하게 되풀이되는 템플릿 패턴, Curiously Recurring Template Pattern)라는 재미있는 트릭이 있다.
부모 클래스를 템플릿 클래스로 만들고 자식 클래스가 자기 자신을 템플릿 인수로 넣어 부모 클래스에서 자식 클래스를 사용할 수 있게 하는 트릭이다.

There's a fun trick in C++ called CRTP (Curiously Recurring Template Pattern).
The trick is to enable the parent class to use the child class by making the parent class a template class and let the child class to pass itself as a template argument.

```cpp
template <typename Derived>
class MyBase {
    ...
};

class MyDerived: public MyBase<Derived> {
    ...
};
```

이 트릭을 이용하면 아래와 같이 싱글톤 베이스 클래스를 제작할 수 있다.
자식 클래스에서 `getInstance()`를 굳이 만들 필요 없이 싱글톤 베이스 클래스를 상속받고 생성자만 구현해주면 된다.
개인적으로 안정성이 중요한 프로그램들에서 싱글톤들의 라이프사이클을 일괄적으로 관리하고 싶을때 매우 유용하지 않을까 생각한다.

Using this trick, you can create a singleton base class like below.
The child class doesn't have to create its own `getInstance()`. I just need to inherit the singleton base class and implement its constructor.
Personally, I think it would be very useful when you want to manage the lifecycle of singletons in the programs where stability is important.

```cpp
template <typename Derived>
class Singleton {
public:
    static const Derived* getInstance() {
        if (m_instance == nullptr) {
            // Call the constructor of the child class (by using CRTP).
            m_instance = new Derived();
        }

        return m_instance;
    }

private:
    static Derived* m_instance;
};

template <typename Derived>
Derived* Singleton<Derived>::m_instance = nullptr;

class Manager : public Singleton<Manager> {
public:
    Manager() {
        m_status = "Manager is created!";
    }

public:
    const std::string& getStatus() const {
        return m_status;
    }

private:
    std::string m_status;
};
```
