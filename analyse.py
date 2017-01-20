import nltk
from nltk import FreqDist
from nltk.corpus import PlaintextCorpusReader
from nltk import tokenize
from nltk.tokenize import TweetTokenizer
from string import ascii_lowercase
import re

#### Exercice 1 ####

def mots_x_lettres(text, x):
	return [w for w in text if len(w) == x]

def freq_decroissante(text):
	fdist = FreqDist(text)
	fdist = {k: v for k,v in fdist.items() if len(k) == 4}
	return sorted(fdist.keys(), key=lambda x:fdist[x], reverse=True)

def mots_expression(text, expression):
	pattern = re.compile(expression)
	liste = [w for w in text if pattern.search(w)]
	return list(set(liste))

def freq_lettre_text(text):
	dico = {}
	fdist = FreqDist(text)
	for letter in ascii_lowercase:
		dico[letter] = 0
		liste = mots_expression(text, "[" + letter + letter.upper() + "]")
		for mot in liste:
			dico[letter] += mot.count(letter) * fdist[mot]

	somme = sum(dico.values())
	return {key: value/somme for key, value in dico.items()}

def nb_moyen_lettre_dans_mot(text):
	somme = 0
	for w in set(text):
		somme += len(w)
	return somme / len(set(text))

if __name__ == '__main__':
	f = open("Corpus.txt", "r")
	corpusText = f.read()
	#print(len(corpusText))
	tweet = TweetTokenizer()
	tokenizedCorpus = tweet.tokenize(corpusText)
	#print(corpusText)
	list_mots_4 = mots_x_lettres(tokenizedCorpus, 4)
	print(list_mots_4)
	print("Fréquence décroissante " + str(freq_decroissante(tokenizedCorpus)))

	fdist = FreqDist(tokenizedCorpus)
	for key in sorted(fdist, reverse=True, key=lambda x: fdist[x]):
		print(key + " " + str(fdist[key]))

	#print(mots_expression(text6, "[hH]at$"))
	#print(mots_expression(text6, "z"))
	#print(mots_expression(text6, "pt"))
	#print(freq_lettre_text(text6))
	#print(freq_lettre_text(udhr.raw("French_Francais-Latin1")))
	#print(freq_lettre_text(udhr.raw("German_Deutsch-Latin1")))
	#print(freq_lettre_text(udhr.raw("English-Latin1")))
	#print(freq_lettre_text(udhr.raw("Spanish_Espanol-Latin1")))
	print(nb_moyen_lettre_dans_mot(corpusText))

	#f.close()
