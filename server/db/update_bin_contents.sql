UPDATE bins SET name = $1, price = $2
  WHERE bin = $3 AND shelf = $4;
SELECT * FROM bins WHERE bin = $3 AND shelf = $4;