# SQL

## SELECT

### 과일로 만든 아이스크림 고르기

```sql
SELECT i.flavor from ICECREAM_INFO i
join FIRST_HALF f on i.FLAVOR = f.FLAVOR
where i.INGREDIENT_TYPE = 'fruit_based'
group by flavor
having sum(f.TOTAL_ORDER) > 3000
order by sum(f.TOTAL_ORDER) desc
```
