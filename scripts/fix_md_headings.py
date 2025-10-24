import os

def fix_markdown_headings(directory):
    """
    Traverses a directory and fixes the heading levels in all Markdown files.
    Specifically, it reduces the heading level by two (e.g., H3 -> H1, H4 -> H2).
    """
    print(f"开始处理目录: '{directory}'")

    if not os.path.isdir(directory):
        print(f"错误：目录 '{directory}' 不存在。")
        return

    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            filepath = os.path.join(directory, filename)
            print(f"  -> 正在处理文件: {filename}")
            
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                
                updated_lines = []
                modified = False
                for line in lines:
                    # 检查是否是三级或更深级别的标题
                    if line.strip().startswith('###'):
                        # 移除前两个'#'字符以提升标题级别
                        updated_lines.append(line[2:])
                        modified = True
                    else:
                        updated_lines.append(line)
                
                if modified:
                    # 如果有修改，则写回文件
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.writelines(updated_lines)
                    print(f"     - 已更新标题: {filename}")
                else:
                    print(f"     - 无需更新: {filename}")

            except Exception as e:
                print(f"处理文件 {filename} 时出错: {e}")

    print("\n处理完成。")

if __name__ == '__main__':
    # 将此处的 'book' 替换为你的目标目录
    target_directory = 'book'
    fix_markdown_headings(target_directory)