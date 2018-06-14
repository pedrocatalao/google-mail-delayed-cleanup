/**
 * Runs a filter over google mail, creating a thread list
 * then it goes through each one of the threads and archives
 * it unless it has any starred messages.
 *
 * @param {string} filter The filter used to get relevant messages for archiving.
 */
function archiveThreads(filter) {
  var threads = GmailApp.search(filter);
  Logger.log("%s threads found with filter %s", threads.length.toString(), filter);
  for (j = 0; j < threads.length; j++) { // Archive threads
    if (!threads[j].hasStarredMessages()) // Skips threads with starred messages
      GmailApp.moveThreadToArchive(threads[j]);
  }
}

/**
 * Goes through all archived threads older than 10 days
 * that haven't been read yet and marks them as read.
 *
 * Threads are processed in blocks of 50 for optimization.
 */
function markOldArchivedAsRead() {
  var batchSize = 50 // Process up to 50 threads at once
  var threads = GmailApp.search('in:unread -in:inbox older_than:10d');
  for (j = 0; j < threads.length; j+=batchSize) {
    GmailApp.markThreadsRead(threads.slice(j, j+batchSize));
  }
}

/**
 * This goes through each of the defined filters and
 * runs one at a time.
 */
function runMyFilters() {
  for (i = 0; i < filters.length; i++) {
    archiveThreads(filters[i]);
  }
}

/**
 * Active filters
 */
var filters = [
  "label:Nagios in:inbox older_than:4h",
  "label:Zendesk in:inbox older_than:3h",
  "label:Github in:inbox older_than:1h",
  "label:Kanban in:inbox older_than:2h -{Due soon}",
  "label:Linode in:inbox older_than:4h",
  "label:Airbrake in:inbox older_than:4h",
  "from:@slack.com in:inbox older_than:1h",
  "from:@netlify.com in:inbox older_than:1h",
  "is:read in:inbox older_than:8d"
];
