import pandas as pd
import nltk
import regex as re
import gensim

metadata = pd.read_csv('dataanime.csv', low_memory=False)

raw_corpus = u""

for x in range(metadata['Description'].shape[0]):
    print("Analyzing '{0}'...".format(metadata['Title'].iloc[x]))
    raw_corpus += metadata['Description'].iloc[x]
    print("Corpus is now {0} characters long".format(len(raw_corpus)))
    print()

tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
sentences_raw = tokenizer.tokenize(raw_corpus)


def listGen(raw):
    clean = re.sub("[^a-zA-Z]", " ", raw)
    words = clean.split()
    return words


sentences = []
for raw_sentence in sentences_raw:
    if len(raw_sentence) > 0:
        sentences.append(listGen(raw_sentence))

print(sentences_raw[5])
print(listGen(sentences_raw[5]))

token_count = sum([len(sentence) for sentence in sentences])
print("The full anime corpus contains {0:,} tokens".format(token_count))

anime_corpus = []
for x in range(metadata['Description'].shape[0]):
    anime_corpus.append(
        gensim.models.doc2vec.TaggedDocument(
            gensim.utils.simple_preprocess(
                metadata['Description'].iloc[x]),
            tags=["{}".format(metadata['Title'].iloc[x])]
        )
    )

params = {
    'vector_size': 1600,
    'min_count': 2,
    'epochs': 35,
    'dm': 1,
    'window': 3
}
model = gensim.models.Doc2Vec(**params)
model.build_vocab(anime_corpus)
print("model's vocabulary length:", len(model.wv.vocab))

model.train(anime_corpus, total_examples=model.corpus_count, epochs=model.epochs)

print(model.docvecs.most_similar("3-gatsu no Lion 2nd Season", topn=20))
