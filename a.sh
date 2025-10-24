#!/bin/bash

# 如果任何命令失败，脚本将立即退出
set -e

echo "🚀 开始整理书籍文件..."

# 1. 删除不再需要的示例文件
echo "正在删除示例文件..."
rm -f api-examples.md markdown-examples.md mermaid-examples.md
echo "✅ 示例文件已删除。"

# 2. 创建 book 目录（如果它不存在）
echo "正在创建 'book' 目录..."
mkdir -p book
echo "✅ 'book' 目录已准备就绪。"

# 3. 移动并重命名章节文件
echo "正在移动并重命名章节文件..."
mv 1.md book/chapter1.md
mv 2.md book/chapter2.md
mv 3.md book/chapter3.md
mv 4.md book/chapter4.md
echo "✅ 所有章节已移至 'book' 目录并重命名。"

echo "🎉 文件结构整理完成！"