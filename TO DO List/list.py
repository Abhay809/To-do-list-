# import scikit-learn library
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

# load iris dataset
iris = datasets.load_iris()

# split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=42)

# create a K-nearest neighbors classifier
knn = KNeighborsClassifier(n_neighbors=3)

# train the classifier on the training data
knn.fit(X_train, y_train)

# make predictions on the test data
y_pred = knn.predict(X_test)

# print the accuracy of the classifier
print("Accuracy:", knn.score(X_test, y_test))

<script src="https://cdn.jsdelivr.net/npm/scikit-learn@0.24.2/dist/scikit-learn.min.js"></script>
<script src="your_machine_learning_code.js"></script>
