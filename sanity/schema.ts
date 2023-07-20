import { type SchemaTypeDefinition } from 'sanity'


import pageInfo from './schemas/pageInfo'
import experience from './schemas/experience'
import project from './schemas/projects'
import skill from './schemas/skill'
import socials from './schemas/socials'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo,experience,project,skill,socials],
}
