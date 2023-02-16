# BarAppPublicVersion

In development of a scheduling app for a local alcohol catering bussiness. The stack will be react native written in typescript, using a firebase backend. The needs for this app include
-- User Authentication 

-- User Authorization for managers to be able to view totals of scheduling on a per day basis to coordinate resources accordingly.

-- Firestore database to hold users first & last name , along with a weekly database that stores users avalability on a per day basis (monday-sunday)

-- Allow state to listen to firestore database to notify and reflect ui to users of there weeks schedule that holds the job location, number of people for the event, and time. 

-- Allow push notifications towards managorial roles specifically when a user updates there avalibility a second time( after the initial scheduling when someone changes there avalability assume they are calling out and managers must be informed).

Possible features:

-- Allow managers to "push" messages to employees each week with there schedule using a api to send an sms message reflecting data provided by firestore ( time , location, # of people for event)

-- The job requires us to take "consumption totals" for beer, wine, and liquor served to appropiatly bill the employee, current system is texting a manager our totals however an efficient way would be to push these through the app and have this data saved into a firestore database to be retrieved when a follow up job is scheduled at the same location to give employees a rough estimate as to how much product to pack, this would increase employee effiency .

Production began in January 2023.
