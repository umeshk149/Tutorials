# Github-ssh

## Git & gh-cli (Install on windows)

```powershell
winget search git
winget install git
winget install Github.cli
```

## Github ssh

1. Enable `OpenSSH Authentication Agent` in windows services
2. Generate key - `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
3. Enter passphrase (mine is same as windows10 login pin)
4. start agent - `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
5. add private key - `ssh-add -K ~/.ssh/id_rsa`
6. Add public key to github.com ssh keys
7. Try to clone my private repo
8. If error `permission denied` then visit [https://stackoverflow.com/a/61163458/4681392](https://stackoverflow.com/a/61163458/4681392) for solution
