# Lab

## Getting Setup (I will guide you through this)

Go to https://github.com/HypertheoryTraining/applied-angular-lab-dec-12-2024

Click the "fork" button.

Hit the "Create Fork" button.

This will create a fork (copy) of the lab in your Github account.

After the fork is created, click the [<> Code] button, make sure the "Github CLI" tab is selected, and copy the command that is displayed.

On your VM, open the [>_] Windows Terminal. You should be in the class folder.

Past the command you copied above into your terminal and run it.

Example:

```sh
gh repo clone YOUR_GITHUB_ACCOUNT/applied-angular-lab-dec-12-2024-trial
```

Type the following in the terminal:

```sh
cd applied-angular-lab-dec-12-2024-trial
npm ci && code
```

Get ready to rock.

Do the lab(s). Commit your code and push it as often as you like.

When you are _done_, push your final changes to the Github, open your repo in the browser on github, and send a pull request.

Hit the "contribute" button, make a pull request, giving me a brief note about what you did.

## Options

You have several options for this lab time.

## Counter [Counter Lab Instructions](./counter.md)

Do the counter again.
I changed the lab so that you can do it again as a "feature", using feature flags.

## Inputs / Outputs

If you want to practice using signals, and inputs and outputs (like we covered on the first day), you
can follow (roughly) the video at [Applied Angular Inputs](https://applied-angular.hypertheory.com/docs/pre-work/02-components-inputs.html) and [Applied Angular Outputs](https://applied-angular.hypertheory.com/docs/pre-work/03-components-outputs.html)

> **Note**: In the video I put the code in a component called "home component". We already have that. Instead, create a feature folder called "news", create a route to "news" (like you did in the counter lab), and do everything in that folder. You can _optionally_ hide this behind a feature flag.

## Books [Books Lab](./books.md)

This one is a little more involved.
