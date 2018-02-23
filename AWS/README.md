# AWS



## Dynamo DB

1. 개요

   - No SQL
   - key-value DB
   - 일반적으로 쿼리가 많아질수록 성능은 저하 → 다이나모디비는 10ms 미만의 일관된 성능 제공

2. 특징

   - 키벨류 → 빠르고 효율적

   - 적합한 도구를 알아서 찾음

     ![](https://postfiles.pstatic.net/MjAxODAyMjFfMjUz/MDAxNTE5MjIyNDgzMzEx.wspaJEvvoVdNp69QNzMiuvVsHZqD8OBer8RCR-zF0tsg.nfFKxwHGcbYEl9hUEUNEAWXOuVre1q2hi6xuYOnDJQ0g.JPEG.solwish/image_6998862491519222355313.jpg?type=w773)

   - No SQL → 예를 들어 facebook의 친구(A)의 친구(B) 글을 친구(A)가 좋아요 누른 B의 글을 내가 볼 수 있는 것처럼 그래프 자료형을 구현하기가 RDBMS에선 어려움. 하지만 No SQL에서는 쉬움

     | Tranditional SQL                              | No SQL                                   |
     | --------------------------------------------- | ---------------------------------------- |
     | Scale up                                      | scale out                                |
     | DB가 필요에 따라 2개, 4개, 8개, 16개씩 늘어남 | 하나씩 추가해 나가면 끝<br />즉 자유도 ↑ |

     > 즉, 일관된 성능 제공
     >
     > 쓴만큼만 돈내면 돼(테이블에 이벤트가 많은 달에는 ↑ 이벤트가 적을때는 ↓)

   - 구조화

     ![](https://postfiles.pstatic.net/MjAxODAyMjFfNjIg/MDAxNTE5MjIzNTA0Mjk1.MmEc9Iv2UiHwPIXkb2rpfgRLYY9DcXaFHv4sLf-_XNQg.uD8SGi88C2sl0JUD-7Pa1oAdbpOBgKkWbFFb8JOTKx0g.PNG.solwish/image_7424839651519223477377.png?type=w773)

     ​

3. 관련 DB 서비스

   | 명칭            | 설명                                                         |
   | --------------- | ------------------------------------------------------------ |
   | AWS RDS         | 관계형 DB                                                    |
   | AWS Elasticache | 메모리기반 키벨류(ex. 장바구니, 캐쉬)                        |
   | Redshift        | - 데이터 웨어하우스<br />- 대용량 병렬처리(수십 TB)<br />- 관계형(RDS랑 비슷하나 대용량이 차이점)<br />- 원시상태에서 쿼리때릴수 있음 |

4. 성능

   - RCU(Read Capacity Unit): 4KB per second

   - WCU(Write Capacity Unit): 1KB per second

   - 스토리지는 자동으로 확장

   - 카파에 대하여 이론적인 제한은 없음 (비용은 문제가 될수도)

   - 즉, 고가용성, 내구성, 보안(IAM과 연동)

     > EC2 <-> IAM <-> Dynamo DB

5. 사용

   - 모든 튜플이 속정을 다가지고 있을 필요 없음 (기본키는 가지고 있어야 함)

     > {name: 레어 검, //기본키
     >
     > effect: 공경력 +10,
     >
     > status: good},
     >
     > {name: 방패,
     >
     > effect: 방어력 +5,
     >
     > durable: bad}

     - 이처럼 키본키(파티션)만 정의해놓으면, 그 뒤에는 자요도가 높음

   - 기본키 + 정렬키 조합이 고유하면 새로운 데이터

     > ex) 아래의 두 데이터는 각각 다른 데이터로 인식
     >
     > | 필드1(기본키) | 필드2(정렬키) |
     > | ------------- | ------------- |
     > | 1             | 가            |
     > | 1             | 나            |

   - ***보조인덱스로 재정렬 가능***

     > - ex) 특정 조건( 예를들면 where문 ) 액세스할 경우
     >
     > | 기존 DB                                                      | GSI(Global secondary Index) |
     > | ------------------------------------------------------------ | --------------------------- |
     > | "전체 데이터 스캔 후" <br />특정 조건을 만족시키는 값들 찾음 | 특정 조건 테이블에서만 스캔 |
     >
     > - 내부적으로는 GSI를 설정하는 순간 기존 테이블을 읽어서 새로 테이블을 만들어 놓음
     >
     > - 만들어진 테이블은 기존 테이블과 별도로 존재
     >
     > - - > ​

6. 문제 해결

   - 파티션별로 액세스하는 횟수가 다른 문제(균듕 분배 X)

     - 쪼개기

       > 기존 DB은 다시 파티션하거나 직접 쪼개야 함
       >
       > Dynamo DB는 알아서 쪼개줌. 쪼갠 파티션이 그래도 많이 액세스 될경우 쪼개는 것을 반복함
       >
       > 하지만, 쪼깬 것이 많아지면 성능저하되고 문제의 근본적인 해결책이 아님
       >
       > 즉, 결국은 여러 테스트를 통하여 균듕분배되도록 개발되도록 하는 것이 최선

     - Cache를 이용해 액세스 횟수를 줄일 수 있음

       > ![](https://postfiles.pstatic.net/MjAxODAyMjJfMTQ5/MDAxNTE5MjI2MjMyNDc3.d22u0Bi8q6Ap1ktNJBevVflSn5FvyS4t7oLHiFfUt48g.1dSLbx82bpbtwZlfzf7qnyJsxSHdlbCN7Y1Lg2MHFbIg.PNG.solwish/5.png?type=w773)

     - optimizing 가능

       > 즉 크기가 큰 속성이 있는 튜플은 포인터 값을 넣어둬서 비용절약(S3 같은건가?)

     - Secondary Index

       > 예를들어 유저가 메일함에 접근할 경우 index 페이지에서는 메일 내용까지 가져올 필요는 없음. 이럴 경우 제목, 날짜, 보낸이, 받는 사람 등만의 필요한 속성들을 가지고 있는 테이블만 따로 Secondary Key를 통해 Inbox table에 접근할 수 있음.
       >
       > ![](https://postfiles.pstatic.net/MjAxODAyMjJfMiAg/MDAxNTE5MjI1MzAyNjk0.abbTv07lUX5631bCgqb3AEB-KQ9gDZUmsqrbxfW1O6gg.uKgKoxoYovaAM5-DMHphSZLDCQe7mtpZZqajWBSK2rkg.PNG.solwish/4.png?type=w773)
       >
       > - ***늘어나는 것은 잘 늘어나지만 줄어드는건 잘 안줄어들어(안정성 때문에) 즉 과비용이 문제될 수 있음***
       > - ***이 경우 원본 데이터는 그대로두고 GSI를 사용하다가 상황이 바뀌면 버리고 새로 GSI를 설정하여 사용하는 것도 추천하는 운영 전략임***

     - Filter


     - Composite Key(아래 사진 참고)
     - Filter with index(아래 사진 참고)

     ![](https://postfiles.pstatic.net/MjAxODAyMjJfMTA3/MDAxNTE5MjI2NzQyMDQ5.8EEbtFqFjak4moxrzJ_pHiPvgfsB8nd2jcCpWTCx7EYg.LEDagvfU0RTdojpoxlfy3ecLBtb5tkSARQT-DWw2R5Eg.JPEG.solwish/image_741743751519226711167.jpg?type=w773)

7. 응용

   - 투표할 때, 특정 후보자가 얼마나 득표했는지 실시간으로 집계한다고 가정할경우
     위의 사진에 Vote 예시처럼 rand함수를 이용해 저장해놓고 SUM함수를 이용해 집계가능

8. 다른 서비스와 연동

   - ***후처리***(위 사진의 오른쪽 참고)

   - ![](https://postfiles.pstatic.net/MjAxODAyMjFfMyAg/MDAxNTE5MjIyNTYzMDU1.RHHubIJDyMC1w3WRCx7jxyTlGH8pW1-NhBFBq00J9FYg.DXlnMXNrgfZYYuhGbeFRHc0SQXRm3LG0xvfy8xsGsc0g.JPEG.solwish/image_9689486941519222355311.jpg?type=w773)

   - 스트림에 담아 다른 region의 DB에 옮기는것도 가능

   - Dynamo DB Streams + Lambda 가 추천하는 조합임

     > 다이나모 디비에서는 Trigger을 통해 다른 서비스를 호출 연동

9. 요약

   - Dynamo DB는 일관된 성능을 보장함
   - 일관된 성능이란 빠르다는 의미가 아니라 데이터가 많아지더라도 항상 10ms의 일정한 성능을 보장하는 안정성의 의미







