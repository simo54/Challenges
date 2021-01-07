# creating dictionary
lettersToMorse = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}

choice = int(input("\nWelcome! Please press 1 for English or 2 for Morse\nInput: "))

if choice == 1:  
    text_english = str(input("\nEnter Text to be translated\n\n"))  
    
    output = ""

    for letter in text_english:
        for match in lettersToMorse:
            if letter == match[0]:
                output += lettersToMorse.get(match[0]) + " "
                break
    print("Output Morse: " + output)
   

else:
    text_morse = str(input("\nEnter Morse to be translated\n\n"))

    output = ""

    for morse in text_morse:
        for match in lettersToMorse:
            if morse == lettersToMorse.get(match[0]):
                print("this is the morse: " + morse)
                print("match is: " + match)





