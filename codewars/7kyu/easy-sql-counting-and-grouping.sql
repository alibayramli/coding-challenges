select race, count(race) from demographics group by race order by count(race) desc;