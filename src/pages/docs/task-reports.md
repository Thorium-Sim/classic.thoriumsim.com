---
title: Task Reports
sidebar_label: Task Reports
category: simulator_config
---
Task reports allow for the creation of a damage, research and development, or engineering report composed of tasks. This allows for better configurability of the reports themselves and automatic verification of the tasks as they are completed. This also allows for tasks that are part of a report to be assigned to the relevant stations. This system also allows for multiple reports to be used on multiple systems at the same time. 

Before using task reports, task templates must be generated. These templates are based on the pre-defined task definitions, and can be assigned to be used in damage, engineering, and resarch and development reports, or all three. Several task templates have already been made and can easily be imported by clicking the "Import Repair Templates" button on the task templates screen.

![Import Task Templates](/img/import-task-template.jpg)

Task templates then need to be assigned to simulators and systems. A task template assigned to a simulator is available for reports targeting any system. Yellow numbers represent task templates that have been assigned to that system or simulator. You can configure which templates are assigned, and if that template is considered 'Required', or that it must be used for every report.

![](/img/simulator-damage-report.jpg)

![](/img/system-damage-report.jpg)

Task reports are generated automatically, but the flight director must manually choose to generate a task report. This is done from the task report core.



![Task Report Creation](/img/task-report-creation.jpg)

Task reports require a name, system, length, and type. Once these have been entered, the report is generated and available on any reports screen.

Existing tasks, including their instructions, can be seen on the main tasks core screen.

![Task Report Core](/img/task-report-core.jpg)

Green text represents tasks that have been completed, or verified. To verify a task that has been completed, click the green button. Tasks are also automatically verified, but some cannot be verified automatically. These tasks must be manually verified. When the crew requests that a task be manually verified, the text turns blue, both in the list of task reports and in the instructions.

Once a task report is completed, the flight director can verify and click 'Complete Report' This will run any actions that may have been configured for the completion of the report, including automatically repairing damaged systems. If the flight director does not want these actions performed, they can click 'Clear Report' to remove the report from the crew's screens.

![](/img/task-report-card.jpg)

The crew card for task reports is the same damage report card that has always been used, and will blend task reports and legacy damage reports into a single user interface. There are some differences, however. By default, all task reports are verified, due to the automatic verification of tasks. Also, in both step form and long form reports, the crew member has the option to assign the task to whichever station should be performing the task. This can help the crewmember distribute their responsibility.
