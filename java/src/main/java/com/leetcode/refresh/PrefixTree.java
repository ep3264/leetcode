package com.leetcode.refresh;

import com.leetcode.tries.TrieNode;

class PrefixTree {
    private TrieNode root = new TrieNode();

    public PrefixTree() {

    }


    public void insert(String word) {
        var cur = root;

        for (char c : word.toCharArray()) {
            var children = cur.children;
            if (children[c - 'a'] == null) {
                children[c - 'a'] = new TrieNode();
            }
            cur =  children[c - 'a'];
        }
        cur.isWord = true;
    }

    public boolean search(String word) {
        var node =  find(word);
        return node != null && node.isWord;
    }

    public boolean startsWith(String prefix) {
        return  find(prefix) != null;
    }

    private TrieNode find(String s) {
          var cur = root;

        for (char c : s.toCharArray()) {
            var children = cur.children;
            cur = children[c - 'a'];
            if (cur == null) return null;
        }
        return cur;
    }
}
