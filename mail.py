#!/usr/bin/python
print 'Content-type: text/html\n\n'

import smtplib

sender = 'sosonline@alwaysdata.net'
receivers = 'manuchap@gmail.com'
message = """From: De <sosonline@alwaysdata.net>
To: A <manuchap@gmail.com>
Subject: Au secours Manu!

Quelqu'un te demande.
"""

smtpObj = smtplib.SMTP('smtp.alwaysdata.com')
smtpObj.sendmail(sender, receivers, message)
