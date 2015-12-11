# google-mail-delayed-cleanup
Google app script to automatically cleanup your google mail box in a delayed fashion.

I want to receive these emails because I find it useful and reliable to get the notifications that way (specially if I'm AFK) but, after a while, they are no longer useful and they start clogging my inbox.

That's why I have this small script running. Every 30min it will search for messages that I don't find useful anymore and archive them.

## This is how get it running:

1. Open your Google Drive

2. Click *New* -> *More* -> *Google App Script*:

   ![](images/new.png)

3. Name your script and paste the code from Github

4. Edit your filters as desired

5. Select *runMyFilters* and press *Play* button to test run the script:

   ![](images/test_run.png)

6. Click *Continue* on the authorization required notice:

   ![](images/auth_req.png)

7. Allow the app to view and manage your mail:

   ![](images/allow.png)

8. Edit your triggers pressing the *Clock* button:

   ![](images/show_triggers.png)

9. Add some triggers as pictured:

   ![](images/trigger.png)

10. Done!
