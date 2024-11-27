<?php

namespace App\Enum;

enum PermissionsEnum: string
{
    case ManegePosts = 'manege_posts';
    case ManageComments = 'manage_comments';
    case UpvoteDownvote = 'upvote_downvote';
}
