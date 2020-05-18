---
title: Task Flows
sidebar_label: Task Flows
category: simulator_config
---

Some simulators that use Thorium have printers that can print out paper-based reports, giving an officer step-by-step instructions which either they perform, or tells them what crew members they should ask for help. These reports are not necessarily connected to damage systems (unlike [Task Reports](/docs/task-reports)) and can be used for anything required by the mission, such as undocking, installing an alien system, or performing an emergency action. The report could be written as if it were sent by an NPC crew member asking the Sensors officer to complete some specialized scans. They were varied in their use.

![Paper Report](/img/task-flow-1-paper.jpg)

Task Flows are designed to replicate that functionality, but instead of on paper the steps of the report are tasks within Thorium. Task Flows consist of a number of steps, and each step can have one or more task assigned to it. The tasks can all be assigned to a specific station, or they can each be assigned to a different station. Finally, Task Flow steps can be configured to automatically advance when all of the tasks are completed, or when just one of the tasks is completed.

Task Flows are configured from the "Tasks" sidebar link.

![Task Flow Config](/img/task-flow-2-config.jpg)

This configuration screen shows the entire configuration for a single Task Flow task. We'll walk through it from left to right.

On the far left side is where you choose if you are going to configure Task Templates or Task Flows.

The next column, "Task Flows" is for creating new Task Flows. Each task flow is independent of the others. Some of them might be used for specific missions; others might be generic and usable in any mission. You can search by name or category for a specific task flow if you happen to have a lot of them. From here you can choose to export all of the task flows at once, or import a task flow export.

The next column, "Flow Config", lets you configure the name and category for your task flow. It is also where you configure steps. Task flows always start at the top-most step and advance through the other steps until the bottom step is completed. Clicking the green button adds a step. Once a step is added, it can be reordered by dragging the step up and down in the list of steps.

The next column, "Step Config", lets you change the name of the step and choose whether the step advances when all of the tasks are completed, or when just one of them is completed. The list of tasks underneath are the tasks that will automatically be assigned to the stations when this step is activated. The green dropdown menu at the bottom allows you to add tasks to this list by choosing the task definition you want ot use. If there is something you want the crew to do that doesn't have a task definition yet, file an issue to get that added in a future Thorium version.

The final column, "Task Config", is where you configure each task in the step. At the top is the task definition - you can't change this. If you want to use a different definition, you have to remove the task and add a new task with the correct definition.

At the bottom of this column is the configuration for the task. Each task definition has a different configuration, so we won't be covering all of the possible combinations in this document. You can also assign macros which will be executed either when the task is activated or when the task is completed.

Just above this is the station tag list. This allows you to add tags to a task to specify which station the task should be assigned to when it is activated. This is useful for reports where a specific officer must go to their crew members to ask them to do something. If you leave this list blank, Thorium will automatically assign your task to the station which can best accomplish it.

Station tags are a new feature, so you have to configure them on each station before you can use them.

![Station Tags](/img/task-flow-3-station.jpg)

Just type your tag into this box on the Simulator Station config for each station. Pressing space, return, or comma will add your tag to the list. By default, the name of the station and each card's component count as tags for the station.

With your task flow fully configured, you can now activate it as part of a mission timeline or from the Task Flows Core. Once activated, the tasks for the first step will automatically be assigned to the appropriate station. You'll be able to see their progress from the Tasks Core.

The Task Flow core looks like this.

![Task Flow Core](/img/task-flow-4-core.jpg)

On the left are all of the task flows that have been activated. Completed flows will fall to the bottom of the list and turn green. At the bottom is a dropdown menu which you can use to activate a new task flow. Be sure to not activate the same task flow twice; otherwise the crew would see more or less duplicate tasks.

On the right is information about the currently selected task flow, including what step the flow is currently on, how many of the step's tasks have been completed, and what stations the tasks are assigned to.
