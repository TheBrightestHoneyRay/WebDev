def make_tags(tag, word):
    tres = "<" + tag + ">"
    result = tres + word + tres
    return result


t = input()
w = input()

print(make_tags(t, w))
