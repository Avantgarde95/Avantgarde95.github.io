윈도우의 WSL2 위에 WSLg 기능을 설치하면, VcXsrv 등의 프로그램 없이도 리눅스용 GUI 프로그램들을 실행할 수 있다.

If we install WSLg on the Windows WSL2, we can run GUI programs for Linux without programs such as VcXsrv.

```bash
$ wsl --update
$ wsl --shutdown
$ wsl
```

종종 cannot open display (또는 couldn't open display) 등의 에러가 뜨며 GUI 프로그램이 실행되지 않는 경우가 있다.
이 때는 아래 사항들을 체크해 보면 된다.

Sometimes we get an error such as cannot open display (or couldn't open display) appears and the GUI program may not run.
In this case, we can try the following methods.

(1) .wslconfig

- PowerShell에서 `notepad $env:USERPROFILE/.wslconfig` 입력
- 만약 .wslconfig 파일이 있으면 guiApplication이 false인지 확인하고 false면 주석처리
- .wslconfig 파일이 없으면 신경 안 써도 됨
<br/><br/>
- Run `notepad $env:USERPROFILE/.wslconfig` on PowerShell
- If .wslconfig exists, check whether guiApplication is false. If it is false, comment it out.
- If .wslconfig doesn't exist, you don't have to do anything

(2) DISPLAY

- wsl에서 `echo $DISPLAY`를 실행했을 때 `:0`이 출력되는지 확인
- 출력되지 않는다면 `~/.bashrc` 등에 `export $DISPLAY=...` 등 DISPLAY를 덮어씌우는 문장이 있는지 확인
<br/><br/>
- Run `echo $DISPLAY` on wsl and check whether the output is `:0`
- If not, open `~/.bashrc` and check whether there are lines which overrides DISPLAY (ex. `export $DISPLAY=...`)

(3) .X11-unix

- `sudo ln -s /mnt/wslg/.X11-unix /tmp/.X11-unix` 실행
<br/><br/>
- Run `sudo ln -s /mnt/wslg/.X11-unix /tmp/.X11-unix`

(4) XDG_RUNTIME_DIR

- 도커 등을 설치하려고 systemd를 만지면 이 증상이 발생할 수 있다.
- wsl에서 `echo $XDG_RUNTIME_DIR`을 실행했을 때 `/mnt/wslg/runtime-dir`이 출력되는지 확인
- 출력되지 않거나 값이 다르다면, `~/.bashrc`에 `export $XDG_RUNTIME_DIR=/mnt/wslg/runtime-dir` 적어주기
<br/><br/>
- If you setup systemd for installing the programs such as Docker, you can get this symptom.
- Run `echo $XDG_RUNTIME_DIR` on wsl and check whether the output is `/mnt/wslg/runtime-dir`
- If not, add `export $XDG_RUNTIME_DIR=/mnt/wslg/runtime-dir` on `~/.bashrc`
