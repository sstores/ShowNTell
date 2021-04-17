import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  //global***************************************

  body {

    transition: all 1.0s linear;
    background-image: url(${({ theme }) => theme.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${({ theme }) => theme.neutral};
    border-color: ${({ theme }) => theme.secondary}
  }

  //HomeFeed*************************************

  .home-title{
  color: ${({ theme }) => theme.neutral};
  margin-top: ${({ theme }) => !theme.classic && '500px'};
  }
  .main-post-container{
    backdrop-filter: blur(10px) saturate(40%);
    background-color: ${({ theme }) => theme.opaque};
    border-color: ${({ theme }) => theme.neutral};

    color: ${({ theme }) => theme.neutral};
  }
  .post-show{
    color: ${({ theme }) => theme.neutral};
  }
  .post-show:hover{
    color: ${({ theme }) => theme.secondary};
   }
   .post-author{
    color: ${({ theme }) => theme.quaternary};
   }
   #post-content{
    color: ${({ theme }) => theme.neutral};
   }
   .post-like-btn{
    color: ${({ theme }) => theme.tertiary};
  }
  .liked-button{
    color: ${({ theme }) => theme.secondary};
  }
  .comment-btn{
    color: ${({ theme }) => theme.tertiary};
  }
  .post-comment-btn{
    color: ${({ theme }) => theme.tertiary};
  }
  .comment-txt-box{
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.neutral};
    border-color: ${({ theme }) => theme.neutral};
  }
  .submit-post-comment-btn{
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.neutral};
    color: ${({ theme }) => theme.neutral};
  }
  .comment {
    backdrop-filter: blur(20px) saturate(40%);
    background-color: ${({ theme }) => theme.opaque};
    border-color: ${({ theme }) => theme.neutral};
    color: ${({ theme }) => theme.neutral};
   }
   .comment-author{
    color: ${({ theme }) => theme.quaternary};
   }
   #comment-content{
    color: ${({ theme }) => theme.neutral};
   }
   .reply-comment-txt-box{
    color: ${({ theme }) => theme.neutral};
    border-color: ${({ theme }) => theme.neutral};
    background-color: ${({ theme }) => theme.primary};
  }
  .submit-reply-comment-btn{
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.neutral};
    color: ${({ theme }) => theme.neutral};
  }
  .x-btn{
    color: ${({ theme }) => theme.neutral};
  }
  .x-btn:hover{
    color: ${({ theme }) => theme.quinary};
  }


  //app***********************************

  .navbar{
    color:${({ theme }) => theme.neutral};
    border-color: ${({ theme }) => theme.neutral};
    backdrop-filter: blur(10px) saturate(40%);
    background-color: ${({ theme }) => theme.opaque};
  }
  .navbutton:hover{
    color:${({ theme }) => theme.quinary};
  }
  .search {
  }
  .search-term {
    border: ${({ theme }) => theme.neutral};
    // background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.ternary};
  }
  
  .search-term:focus{
    color:${({ theme }) => theme.primary};
  }
  
  .srch-button {
    border:${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.neutral};
    color: ${({ theme }) => theme.primary};
  }

  //MovieMode*************************
  .dropbtn {
    backdrop-filter: blur(20px) saturate(40%);
    background-color: ${({ theme }) => theme.opaque};
    border-width: 2.4px;
    border-color: ${({ theme }) => theme.neutral};
    color: ${({ theme }) => theme.neutral};

  }
  .dropdown-content a:hover {
    cursor: pointer;
    ${({ theme }) => theme.quaternary};
  }
  .dropdown-content {
    backdrop-filter: blur(20px) saturate(40%);
    background-color: ${({ theme }) => theme.opaque};
    border-width: 2.4px;
    border-color: ${({ theme }) => theme.neutral};
  }
  .dropdown-content a {
    color: ${({ theme }) => theme.neutral};
  }
  .dropdown:hover .dropbtn {
    ${({ theme }) => theme.primary};
  }
`;
