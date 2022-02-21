# HyperLedger-Projects-Car-Dealer-MVD

This is an example of the retail industry of vehicles.

There are different entities such as manufacturers, dealers, end-users, etc in this lineup. So if we consider the manufacturer, they will be having a book of records holding the information about each of the cars getting manufactured. Likewise, each entity in the system will carry its own book of records with related data.

The manufacturer builds a car and holds a record of all the details regarding that car in their book of records. This vehicle then gets transferred to a dealer. This transaction is also recorded in the manufacturer’s record-keeping book.
The dealer has their own set of records to store the information of vehicles they possess. When a new vehicle is received, the dealer adds this fact to their book of records. The manufacturer also has additional records such as from where they procured parts, equipment, etc. This data is stored in the manufacturer’s book of records as well as the supplier’s book. These books of records are the ledgers maintained by each of these entities. ie. the manufacturer holds its record of transactions and the dealer holds its record.

In essence, the book of record maintained by each of the entities involved in the transaction is the ledger and the entities do not have access to each other’s record of transactions. The major concern with this type of ledger system is that the data is disseminated. These issues can be addressed to streamline the current process, make the system more efficient, and enable every stakeholder with equal benefits of information access.

Challenges of keeping individual records can be summarized as follows:

    Data integrity
    Transparency
    High cost
    Traceability
  
We have a Motor Vehicle Department (MVD) to regulate the automotive trade. Only an MVD can assign a registration number at the time of the car sale by a dealer. MVD maintains its ledger that may not be in sync with other participants in the system.

Network participants 
``Manufacturer``
`` Dealer``
``MVD``

A transaction related to the production of the car is initiated by the manufacturer. It gets recorded not only in the copy of the distributed ledger held by the manufacturer but also gets reflected in the dealer’s copy of the distributed ledger. In the same way, the transfer of car ownership by the manufacturer and then by the dealer is also recorded in the same ledger. MVD will also have access to the same data since it is also a part of the consortium and maintains a copy of the ledger.

Some of the business processes that exist in our car trade scenario.

    Create a car by the manufacturer.
    Create an order request by the Dealer.
    Match the dealer’s order with the appropriate car in the manufacturer’s inventory.
    MVD assigns the car to an end-user by giving it a number.

