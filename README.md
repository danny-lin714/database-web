使用Header和側邊欄：
Header: 直接import component裡面的multi/header
Header 下方直接加上一個container, 並且直接include bottom-block
左側側邊欄：
寫在container裏面，已經預設好位置以及響應式了
- user/menu:
- search/searchform-2：
- user/Setting:
剩下的空間：
- 有引用user/menu的頁面: 
    剩下的空間用一個container包起來，並且
    ＠include right-block;
- 有引用search/searchform-2的頁面: 
    剩下的空間用一個container包起來，並且
    ＠include right-block;
    @include set-rightblock-responsive(70%, 77%, 82%);
- 有引用user/Setting的頁面：
    剩下的空間用一個container包起來，並且
    @include right-block;
    @include set-rightblock-responsive(60%, 70%, 80%);