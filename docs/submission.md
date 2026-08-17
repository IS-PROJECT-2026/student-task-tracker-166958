# Project Submission Report

## 1. Student Details

- **Full Name:** Michelle Mutuma
- **GitHub Username:** Michelle-Mutuma
- **Email:** michelle.mutuma@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/student-task-tracker-166958/

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/student-task-tracker-166958/commit/38874f2
- **Why this one?** I chose this commit because it follows the Conventional Commits format with a clear `feat:` type and a concise subject that accurately describes the change. It represents a focused application feature: persisting student tasks locally.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/student-task-tracker-166958/commit/4ab50a1
- **What happened and how did you recover?** During the first attempt to create a merge conflict, I accidentally created the feature branch from the same point as the other branch, so Git performed a fast-forward merge instead of producing a conflict. I identified the problem from the `Fast-forward` output, reset `main` to the common ancestor, recreated the divergent branches correctly, and then successfully produced and resolved a real content conflict. The final resolution was recorded in commit `f44c438`.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/student-task-tracker-166958/pull/16
- **What did you check before merging?** I reviewed the changed files and diff to confirm that task persistence was implemented correctly, checked that the change was focused on the issue requirements, and verified that the application continued to work before the pull request was merged.

### D. One Thing You Would Do Differently

- **What would you change?** I would plan the Git workflow and evidence requirements before starting the implementation, especially the branch structure, screenshots, and merge-conflict scenarios. This would reduce unnecessary branch corrections and make the evidence collection more systematic.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/student-task-tracker-166958/branches

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

![Milestones](evidence/milestones.png)
![Issues](evidence/issues.png)

* **Caption:** The project milestone organizes the Student Task Tracker work into granular issues covering project setup, task management, filtering, progress tracking, responsive design, persistence, validation, deployment, and documentation.

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

![Project Board](evidence/projectboard.png)

* **Caption:** The project board provides a visual workflow for tracking development tasks across To Do, In Progress, and Done, allowing project progress to be monitored throughout implementation.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

![Branching architecture](evidence/branching-arch.png)

* **Caption:** The repository uses conventional, issue-linked branch naming patterns including `feat/`, `fix/`, `style/`, and `docs/` branches. Feature development was separated from `main` and merged through the project's pull-request workflow.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

![Pull request #16](evidence/pull-req.png)

* **Caption:** PR #16 merged the `feat/7-persist-tasks` branch into `main`. The pull request provides traceability between the development branch, the persistence feature, its implementation commit, and the related development issue.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

Three merge conflicts were deliberately engineered using different causes. Each conflict was reproduced locally and resolved.

### Conflict 1 — Full Chronology

**What cause did you use?** Content conflict — both branches modified the same line of the same file.

#### Step 1: Generating the Clash

* **Caption:** The `conflict/1-main-change` and `conflict/1-feature-change` branches modified the same line in `conflict-demo.txt`. Git reported a content conflict when the feature branch was merged.

#### Step 2: Inside the Code Editor (Conflict Markers)

* **Caption:** Git inserted `<<<<<<< HEAD`, `=======`, and `>>>>>>>` markers to identify the competing versions. The conflicting content was reviewed and combined into the final resolved version.

#### Step 3: Resolution & Clean Merge

* **Caption:** The conflict was resolved and committed with the message `merge: resolve conflict in demo file`.

**Resolution commit:** https://github.com/IS-PROJECT-2026/student-task-tracker-166958/commit/f44c438

![Conflict 1](evidence/conflict-1.png)

---

### Conflict 2 — Different Cause

**What cause did you use?** Modify/delete conflict — one branch modified `conflict-2.txt` while the other branch deleted it.

* **Caption:** Git reported `deleted by them: conflict-2.txt`, demonstrating a modify/delete conflict. The modified version was retained during resolution.

**Resolution commit:** https://github.com/IS-PROJECT-2026/student-task-tracker-166958/commit/205bef1

![Conflict 2](evidence/conflict-2.png)

---

### Conflict 3 — Different Cause

**What cause did you use?** Rename/rename conflict — both branches renamed the same original file to different filenames.

* **Caption:** Both branches independently renamed `conflict-3.txt` to different filenames, producing a rename/rename conflict. The competing names were resolved into a single final file.

**Resolution commit:** https://github.com/IS-PROJECT-2026/student-task-tracker-166958/commit/eebebfb

![Conflict 3](evidence/conflict-3.png)

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
