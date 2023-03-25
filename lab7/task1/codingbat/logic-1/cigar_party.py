def cigar_party(cigars, is_weekend):
    if is_weekend == 'True':
        if cigars >= 40:
            return True
    if 40 <= cigars <= 60:
        return True

    return False


c = int(input())
w = input()

print(cigar_party(c, w))
