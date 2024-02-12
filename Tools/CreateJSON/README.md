# 제5회 대한민국 SW융합 해커톤 대회

[![poster](../assets/poster.jpg)](https://onoffmix.com/event/144376)

## Team

- 개발몽키즈
  - Leader : [`현운용`](https://github.com/soronto3603)
  - Member : [`류동준`](https://github.com/rdj94), [`이동건`](https://github.com/Sotaneum), `박건우`

## CreateJSON

- 웹을 구현할 때에 서버에서 받을 데이터를 임시로 만들고자 구현한 Python 코드입니다. 다음과 같이 사용하시면 됩니다.

    ```python
    data="["
    for idx in range(0,99999):
        if idx!=0:
            data+=","
        data+=jsons()
    data+="]"

    f = open("path.json", 'w')
    f.write(data)
    f.close()
    ```

## Role

- 테스트 데이터 생성, Python
  - [CreateJSON](./CreateJSON/README.md)
