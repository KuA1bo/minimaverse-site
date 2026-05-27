name: Feature Request
description: Suggest an improvement or new content for the site
title: "[Feature] "
labels: ["enhancement", "needs-review"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        Thank you for your suggestion. All proposals must include verified primary sources.
        
        Note: Content must be neutral, source-based, and free of marketing language.
  
  - type: input
    id: page-url
    attributes:
      label: "Related Page"
      description: "Target page or 'new page'"
      placeholder: "/about"
    validations:
      required: false
  
  - type: textarea
    id: suggestion
    attributes:
      label: "Proposal"
      description: "Technical description of the suggested change or addition"
      placeholder: |
        Add a section about Cascada consensus on /protocol.
        Content should reference official documentation and include status label.
    validations:
      required: true
  
  - type: textarea
    id: primary-sources
    attributes:
      label: "Primary Sources"
      description: "Links to official documentation verifying this information (required)"
      placeholder: |
        - https://docs.minima.global/consensus
        - https://github.com/minima-global/Minima/blob/master/README.md
    validations:
      required: true
  
  - type: dropdown
    id: proposed-status
    attributes:
      label: "Proposed Status Label"
      description: "Suggested status for this content"
      options:
        - "confirmed"
        - "in-development"
        - "experimental"
        - "speculative"
    validations:
      required: true
  
  - type: textarea
    id: additional-context
    attributes:
      label: "Additional Context"
      description: "Technical notes only. No speculation or marketing language."
    validations:
      required: false
