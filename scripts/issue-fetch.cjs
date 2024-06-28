const axios = require("axios");

/**
 * Fetches a GitHub issue given its URL.
 * @param {string} issueUrl - The URL of the GitHub issue.
 * @returns {string} - The GitHub issue data.
 */
const fetchGithubIssue = async (issueUrl) => {
  try {
    // Call using axios
    const response = await axios.get(issueUrl);

    // Get the issue description from the body
    const issue = response.data.body;

    return issue;
  } catch (error) {
    console.error(
      "Failed at fetching Github Issue. Please check the issue URL again..."
    );
    return "";
  }
};

module.exports = { fetchGithubIssue };