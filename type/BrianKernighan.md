由Brian Kernighan发明，用于快速计算二进制有多少个1位
核心
```js
while(n > 0){
    n = n & (n - 1)
}
```