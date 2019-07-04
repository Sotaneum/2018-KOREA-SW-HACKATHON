 - 해당 파일들 업로드 후 아래 양식처럼 사용합니다.

<hr>

 - "/?url=" 이후에 있는 경로를 읽어 화면에 표시합니다.
 - url 파라미터를  get 요청으로 주지 않을 경우 http://duration.digimoon.net/dev/Hackathon/test2.json 데이터를 읽어서 처리합니다.

 - 로컬에서
   - http://localhost/?url=http://duration.digimoon.net/dev/Hackathon/test.json
   - http://localhost/?url=http://duration.digimoon.net/dev/Hackathon/test2.json
 - 데모웹페이지에서
   - http://duration.digimoon.net/dev/Hackathon/?url=http://duration.digimoon.net/dev/Hackathon/test.json
   - http://duration.digimoon.net/dev/Hackathon/?url=http://duration.digimoon.net/dev/Hackathon/test2.json

<hr>

 - JSON 양식

   ```json
   [
       {
           "location":{
               "x":12,
               "y":36
               },
            "age":21,
            "sex":"m",
            "is_entered":1,
            "timestamp":12002000001
        },
        {
            "location":{
                "x":12,
                "y":36
                },
            "age":21,
            "sex":"m",
            "is_entered":1,
            "timestamp":12002000001
        }
    ]
   ```

 - 예제 파일 링크
    - http://duration.digimoon.net/dev/Hackathon/test.json

<hr>

 - next는 인식하는건 제외되었습니다. (하지만 인식시켜도 사실 무관한걸 깨달았지만 일단 제외시켰습니다.)
 - http://duration.digimoon.net/dev/Hackathon/test2.json 데이터 넣어도 인식되나, 첫번째 노드만 인식합니다.