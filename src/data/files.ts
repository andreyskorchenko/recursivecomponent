export const files = {
  type: 'folder',
  name: 'Root',
  children: [
    {
      type: 'folder',
      name: 'Documents',
      children: [
        {
          type: 'folder',
          name: 'Home',
          children: [
            { type: 'file', name: 'local.log' },
            { type: 'file', name: 'root.png' },
          ],
        },
        {
          type: 'folder',
          name: 'Work',
          children: [
            { type: 'file', name: 'nginx.log' },
            { type: 'file', name: 'guide.doc' },
            { type: 'file', name: 'screenshot.png' },
          ],
        },
        { type: 'file', name: 'list.txt' },
        { type: 'file', name: 'log.txt' },
        { type: 'file', name: 'picture.jpg' },
        { type: 'file', name: 'document.doc' },
      ],
    },
  ],
};
