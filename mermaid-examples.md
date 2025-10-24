
# Mermaid 图表示例

此页面演示了如何通过 `vitepress-plugin-mermaid` 在 VitePress 中直接编写和渲染 Mermaid 图表。

## 流程图 (Flowchart)

您可以在 Markdown 文件中直接使用 `mermaid` 代码块来绘制图表。

**输入**
````
```mermaid
graph TD
    A[开始] --> B{检查配置};
    B -- Yes --> C[渲染图表 ✨];
    B -- No --> D[检查插件安装];
    C --> E[完成];
    D --> B;
```````

**输出**

```mermaid
graph TD
    A[开始] --> B{检查配置};
    B -- Yes --> C[渲染图表 ✨];
    B -- No --> D[检查插件安装];
    C --> E[完成];
    D --> B;```

## 时序图 (Sequence Diagram)

同样支持其他类型的图表，例如时序图。

**输入**
````
```mermaid
sequenceDiagram
    participant User
    participant VitePress
    participant MermaidPlugin

    User->>VitePress: 编写 Markdown 文件
    VitePress->>MermaidPlugin: 发现 mermaid 代码块
    MermaidPlugin-->>VitePress: 转换为 SVG
    VitePress-->>User: 显示渲染后的图表
```````

**输出**

```mermaid
sequenceDiagram
    participant User
    participant VitePress
    participant MermaidPlugin

    User->>VitePress: 编写 Markdown 文件
    VitePress->>MermaidPlugin: 发现 mermaid 代码块
    MermaidPlugin-->>VitePress: 转换为 SVG
    VitePress-->>User: 显示渲染后的图表
```