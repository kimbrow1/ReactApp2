import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
   
    return (
    <div className="ui container comments"> 
     <ApprovalCard/>
     <CommentDetail  
            author="James" 
            timeAgo="Today at 1:30pm"
            wordUse="We trust in you" 
            pic={faker.image.avatar()}  
         />

        <CommentDetail  
            author="Will" 
            timeAgo="Today at 2:30pm"  
            wordUse="Hard work over everything"
             pic={faker.image.avatar()}
         />

        <CommentDetail
            author="Jeff"
            timeAgo="Today at 3:30pm"  
            wordUse="Last man standing" 
            pic={faker.image.avatar()}
          />

        <CommentDetail 
            author="Jenae" 
            timeAgo="Today at 4:30pm" 
            wordUse="We are Army Strong"
             pic={faker.image.avatar()}
         />

        <CommentDetail 
            author="Brian"
            timeAgo="Today at 5:30pm" 
            wordUse="Laziness amounts to nothingness" 
            pic={faker.image.avatar()}
         />
    </div>

    );
};

ReactDom.render(<App />, document.querySelector('#root'))