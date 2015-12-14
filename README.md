# google-mail-delayed-cleanup
Google app script to automatically clean up Gmail inbox in a delayed fashion.

It is useful to receive some email notifications but after a while they become useless and start clogging the inbox.

This script will run every 30min (configurable) to archive messages based on a given list of filters/rules.

To make sure important messages are not archived, just mark them with a *Star* and they will be skipped by the script.

## This is how get it running:

1. Open Google Drive

2. Click *New* -> *More* -> *Google App Script*:

   ![](images/new.png)

3. Name the script and paste the code from Github (Code.gs)

4. Edit the filters as desired

5. Select *runMyFilters* and press *Play* button to test run the script:

   ![](images/test_run.png)

6. Click *Continue* on the authorization required notice:

   ![](images/auth_req.png)

7. Allow the app to view and manage your mail:

   ![](images/allow.png)

8. Edit the triggers pressing the *Clock* button:

   ![](images/show_triggers.png)

9. Add some triggers as pictured:

   ![](images/trigger.png)

10. Done!
