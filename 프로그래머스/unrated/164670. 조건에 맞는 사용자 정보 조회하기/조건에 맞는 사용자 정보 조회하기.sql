-- 코드를 입력하세요
SELECT 
ugu.user_id as USER_ID, 
ugu.nickname as NICKNAME, 
concat(ugu.city, ' ', ugu.street_address1, ' ', ugu.street_address2) as 전체주소,
concat(left(ugu.tlno, 3), '-', mid(ugu.tlno, 4, 4), '-', right(ugu.tlno, 4)) as 전화번호
FROM USED_GOODS_USER ugu 
join USED_GOODS_BOARD ugb on ugu.user_id = ugb.writer_id
group by ugu.user_id
having count(ugu.user_id) > 2
order by ugu.user_id desc