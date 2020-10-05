# AuditTrail
Implements an audit trail feature for Salesforce objects

## Overview
Two custom objects are used: Audit_Trail__c, which logs a record for every field change, and Audit_Trail_Config__c, which allows an administrator to configure which objects/fields to track. A short trigger must be established on each object needing tracking. A sample trigger for Case is included.

The main logic is handled in the AuditTrailServices class. The LogChange method will work for any sObject. It gathers a list of fields on the object, and checks the Audit_Trail_Config__c object to see if any should be audited. It then loops through the new records, comparing each relevant field value and logging an entry in Audit_Trail__c if they are different.

The audit trail stores values as 255-character strings. This means long text entries are tracked, but the before and after values may be truncated.

A Lightning Component called AuditTrail is also provided, and can be added to the layout as needed.

Note: No security considerations are taken into account, potentially exposing data in the audit trail display.
