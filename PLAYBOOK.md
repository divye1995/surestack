# My Reusability Playbook 

This document provides contributors viewers or any lost soul with a insight of what questions to ask when one is trying to contribute/improve/Ask a feature in this Project. 

For Every Feature Ask the Following series of question

1. Can this feature be App agnostic : Can we build this feature to either be directly deployed as a seperate app too. If yes how can we set it up that kind of Reusabilty. 

> Look at this space for guides/articles that helped me create highly reusable plug and play features.

2. Every feature is made of components. Once the components are decided we should ask can this component be available as a seperate Module for others to use.

> Look at this space for guides/blogs/posts that helped me create resusable App components.

3. Each App component may have many sub features, models , utilities that can be Reused not only in the current framework but in general JS world. We should try and extract these modules and distribute them as individual Libraries/npm Modules.

> Look at this space for links of individual modules and libraries that we have built in this project and how we came to decision that it will be usefull for other developers.

4. Some Utilities and Parts of your components can either be enhanced or further broken down so as to be available across both frontend and server-side stack. Ask your library/utility if it has the potential to do so.

> Look at this space for essential guides and checklist to create Stack agnostic libraries. 



By Asking ourselves These questions we force ourselves to think and understand each part of our system. I have worked on many projects where there were components that could have fit each level of reusability but regretfully remained tightly coupled with their projects. We can create a vibrant footprint of our code by asking these questions and patiently trying to answer them. 

Having Asked these questions, I also understand the state of many developers where delivery has much priority over this kind of Design thinking. Though provided with every framework comes chance to reuse and distribute smaller parts of a project its not always feasible to take that route. I would like to argue that , creating Reusability actually provides agility and flexibility to plug and play better things, have ease of experimentation and also reduces interdependibility in you components. 


## Reusability not Redundancy 

At each level , you may come to another crossroad. Whether to use an existing library or Component either by fitting our use case around it or to create our own. No one really wants to recreate the wheel , we definitely Dont. In these cases we should make sure to keep these solutions in our mind. 

1. Try not to fit a use case for a component : Always look at finding componets that give you everything you may need. If there are just a couple of features missing , try improving that component by either contributing to that project ( Not always possible )
2. Use now , improve later: In the situation where we are living with a component make sure to reduce use in the project and always add issues about improving the component later.
3. Lastly avoid dependencies on others : Every such situation is an opportunity to create new components even if they seem redundant ( maybe your project may pick up better due to your added features.) 




