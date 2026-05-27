name: Bug Report
description: Report an error, typo, or broken link on the site
title: "[Bug] "
labels: ["bug", "needs-review"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        Thank you for reporting an issue. Please provide verified facts only.
        
        Note: This site is an independent hub. For protocol issues, contact official Minima channels.
  
  - type: input
    id: page-url
    attributes:
      label: "Page URL"
      description: "Location of the issue (e.g., /nodes or https://minimaverse.com/nodes)"
      placeholder: "/timeline"
    validations:
      required: true
  
  - type: dropdown
    id: issue-type
    attributes:
      label: "Issue Type"
      description: "Category of the reported issue"
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
      description: "Current behavior vs. expected behavior (with source reference if applicable)"
      placeholder: |
        Example:
        - Current: "Minima uses Proof-of-Stake consensus"
        - Expected: "Minima uses Cascada consensus (hybrid PoW)"
        - Source: https://docs.minima.global/consensus
    validations:
      required: true
  
  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: "Steps to Reproduce"
      description: "Reproduction steps (if applicable)"
      placeholder: |
        1. Navigate to /nodes
        2. Click "Docker Repository" link
        3. Observe 404 error
    validations:
      required: false
  
  - type: textarea
    id: source-reference
    attributes:
      label: "Primary Source Reference"
      description: "Link to official documentation confirming expected behavior"
      placeholder: "https://docs.minima.global/..."
    validations:
      required: false
  
  - type: checkboxes
    id: terms
    attributes:
      label: "Confirmation"
      options:
        - label: "I have searched existing issues to avoid duplicates"
          required: false
        - label: "This issue concerns the Minimaverse website, not the Minima protocol"
          required: true
