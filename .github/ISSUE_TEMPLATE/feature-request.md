name: Feature Request
description: Suggest an improvement or new content for the site
title: "[Feature] "
labels: ["enhancement", "needs-review"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        Thank you for your suggestion! Please fill out the form below.
        
        ⚠️ This site does not represent the official Minima team. All content must be sourced from official Minima documentation.
  
  - type: input
    id: page-url
    attributes:
      label: "Related Page (if any)"
      description: "Which page is this about? (e.g., /about, /timeline, or 'new page')"
      placeholder: "/about"
    validations:
      required: false
  
  - type: textarea
    id: suggestion
    attributes:
      label: "Suggestion"
      description: "What would you like to add or change?"
      placeholder: |
        I suggest adding a section about [topic] on the /about page.
        This would help users understand [benefit].
    validations:
      required: true
  
  - type: textarea
    id: sources
    attributes:
      label: "Sources"
      description: "Please provide links to official sources that verify this information"
      placeholder: |
        - https://docs.minima.global/...
        - https://github.com/minima-global/...
        - https://minima.global/blog/...
    validations:
      required: true
  
  - type: textarea
    id: additional-context
    attributes:
      label: "Additional Context (optional)"
      description: "Any other information that might be helpful"
    validations:
      required: false

