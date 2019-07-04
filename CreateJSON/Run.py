import random

def jsons():
    x = str(random.randrange(0, 250))
    y = str(random.randrange(0, 250))
    age = str(random.randrange(1, 60))
    sex = random.randrange(0, 2)
    if sex == 0:
        sex = "f"
    elif sex == 1:
        sex = "m"
    else:
        sex = "x"
    is_entered = str(random.randrange(0, 2))
    timestamp = str(random.randrange(1505999999999, 1530999999999))
    move = random.randrange(0, 2)
    data = '{"location":{"x":' + x + ',"y":' + y + '},"age":' + age + ',"sex":"' + sex + '","is_entered":' +\
           is_entered + ',"timestamp":' + timestamp
    if move == 1:
        data += ',"next":'+jsons()
    data += '}'
    return data

data="["
for idx in range(0,99999):
    if idx!=0:
        data+=","
    data+=jsons()
data+="]"

f = open("D:/3. Project/test2.json", 'w')
f.write(data)
f.close()
