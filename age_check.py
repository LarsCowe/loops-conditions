
try:
    leeftijd = int(input("Voer uw leeftijd in: "))

    if leeftijd < 0:
        print("Leeftijd kan niet negatief zijn.")
    elif leeftijd < 12:
        print("U bent een kind.")
    elif leeftijd < 18:
        print("U bent een tiener.")
    elif leeftijd < 65:
        print("U bent een volwassene.")
    

except ValueError:
    print("Ongeldige invoer. Voer een getal in.")
