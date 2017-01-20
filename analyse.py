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

def size_sentences(file):
	sommemots = 0
	sommelignes = 0

	for s in file.readlines()[:241]:
		sommemots += len(s)
		sommelignes += 1
	return sommemots / sommelignes

def nb_moyen_lettre_dans_mot(text):
	fdist = FreqDist(text)
	mots = fdist.keys()
	return sum([len(mot) for mot in mots]) / len(mots)

def nb_synonyms(file):
	file.seek(0)
	return len(file.readlines()) - 241


if __name__ == '__main__':
	f = open("Corpus.txt", "r")
	corpusText = f.read()
	f.close()
	#print(len(corpusText))
	tweet = TweetTokenizer()
	tokenizedCorpus = tweet.tokenize(corpusText)
	#print(corpusText)
	list_mots_4 = mots_x_lettres(tokenizedCorpus, 4)
	#print(list_mots_4)
	#print("Fréquence décroissante " + str(freq_decroissante(tokenizedCorpus)))

	fdist = FreqDist(tokenizedCorpus)
	for key in sorted(fdist, reverse=True, key=lambda x: fdist[x]):
		if len(key) > 2:
			print(key + " " + str(fdist[key]))

	print(nb_moyen_lettre_dans_mot(tokenizedCorpus))

	f = open("Corpus.txt", "r")
	print(size_sentences(f))
	print(nb_synonyms(f))

	f.close()
