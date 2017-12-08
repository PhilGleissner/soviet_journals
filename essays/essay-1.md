# Essay 1

Beginning of essay 1 goes here. At the beginning of Soviet Journals Reconnected stood the idea of a dataset that would collect and connect information about thick journals. Who published what, where, and when? Some of the relevant data is available in digital format already, which made the

The database schema presented here was designed with SJR's research questions in mind, but it is also envisioned as a model that can align easily with adjacent research projects and that can accommodate datasets from different cultural, geographical, and historical contexts

Image should be below here

<img src="/static/images/sjr_database.png" style="width:900;height:676px;" hspace="5" border="1">

SJR uses a relational database in MySQL that consists of four modules: journals, contributions, persons and locations. (What is a relational database?) In keeping with current periodical studies research, the SJR database has at its core not the individual text, but the journal and the individual issue, which provides is the connecting point between two (overlapping) social groups: editors and authors.

## Some sub headline goes here

The Persons and Locations modules are really just one list each, but designing them as separate modules nevertheless was a conscious decision.

<img src="images/sjr_database_persons_locations.png" style="width:900;height:676px;" hspace="5" border="1">

Some more text down here.
