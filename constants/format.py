import json
import csv


def main():

    with open('./Master sheet - Sheet1 (1).csv', 'r') as file:

        with open('wallet.json', 'w') as newFile:
            newContent = '['

            for line in file.readlines():
                strippedLine = line.strip()
                newContent += '"'+ strippedLine + '",\n'
            newContent += ']'

            newFile.write(newContent);


if __name__ == '__main__':
    main()