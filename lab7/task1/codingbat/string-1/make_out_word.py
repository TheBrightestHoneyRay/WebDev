def make_out_word(out, word):
    result = out[:2] + word + out[2:4]

    return result


out = input()
word = input()

print(make_out_word(out, word))
