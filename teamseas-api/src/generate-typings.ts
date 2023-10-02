import {GraphQLDefinitionsFactory} from '@nestjs/graphql';
import {join} from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'], //schemas
    path: join(process.cwd(), 'src/graphql.ts'), //types
    outputAs: 'class', //output of schemas in class
    watch: true, //update types with schemas changes
})