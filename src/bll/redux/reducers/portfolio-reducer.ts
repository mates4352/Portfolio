type portfolioType = {
   projects: Array<projectType>,
}

export type projectType = {
   title: string,
   image: string
   alt: string
   pageLink: string
   gitHubLink: string
   technologies: Array<string>,
}


export const portfolioReducer = (state: portfolioType, action: any): portfolioType => {
   switch (action.type) {
      default: return state
   }
}
