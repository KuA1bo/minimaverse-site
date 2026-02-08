name: Bug Report
description: Report an error, typo, or broken link on the site
title: "[Bug] "
labels: ["bug", "needs-review"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        Thank you for reporting an issue! Please fill out the form below.
        
        ⚠️ This site does not represent the official Minima team. For protocol-related issues, please contact official Minima channels.
  
  - type: input
    id: page-url
    attributes:
      label: "Page URL"
      description: "Where did you find the issue? (e.g., /nodes or https://minimaverse.com/nodes)"
      placeholder: "/timeline"
    validations:
      required: true
  
  - type: dropdown
    id: issue-type
    attributes:
      label: "Issue Type"
      description: "What kind of issue are you reporting?"
      options:
        - "Typo or grammar error"
        - "Broken link"
        - "Outdated information"
        - "Missing information"
        - "Incorrect fact"
        - "Other"
    validations:
      required: true
  
  - type: textarea
    id: description
    attributes:
      label: "Description"
      description: "What is wrong and what should it be?"
      placeholder: |
        Example:
        - Current text: "Minima uses Proof-of-Stake consensus"
        - Expected text: "Minima uses Cascada consensus (hybrid PoW)"
        
        OR
        
        - Link: "Docker Repository" returns 404
        - Expected URL: https://github.com/minima-global/Minima/tree/master/docker
    validations:
      required: true
  
  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: "Steps to Reproduce (if applicable)"
      description: "How can we see the issue?"
      placeholder: |
        1. Go to /nodes
        2. Click on "Docker Repository" link
        3. See 404 error
    validations:
      required: false
  
  - type: textarea
    id: screenshot
    attributes:
      label: "Screenshot (optional)"
      description: "URL to screenshot or drag-and-drop image below"
      placeholder: "https://i.imgur.com/abc123.png"
    validations:
      required: false
  
  - type: checkboxes
    id: terms
    attributes:
      label: "Confirmation"
      description: "Please confirm the following:"
      options:
        - label: "I have searched existing issues to avoid duplicates"
          required: false
        - label: "This issue is about the Minimaverse website, not the Minima protocol itself"
          required: true

