const menu = [
    { id: 1, name: "Desktops", parent: 3 },
    { id: 3, name: "Computers", parent: 8 },
    { id: 4, name: "Smartphones", parent: 6 },
    { id: 6, name: "Portables", parent: 3 },
    { id: 7, name: "Tablets", parent: 6 },
    { id: 8, name: "Electronics ", parent: null },
    { id: 18, name: "Camping", parent: null },
    { id: 10, name: "TV", parent: 8 },
    { id: 20, name: '11 pol', parent: 7 },
    { id: 13, name: "Remotes", parent: 14 },
    { id: 14, name: "Accessories", parent: 10 }
]

window.addEventListener('DOMContentLoaded',() => Tree(menu))

function Tree(data){
    const tree = document.querySelector('nav#tree');

    const menu = document.createElement('ul');

    const firstLevel = data.filter(item => !item.parent)

    const getFirstLis = firstLevel.map(buildTree)
    getFirstLis.forEach(li => menu.append(li))

    function buildTree(item){
        const li = document.createElement('li');
        li.innerHTML = item.name

        const childrens = data.filter(
            child => child.parent === item.id
        ) 

        if(childrens.length > 0){
            li.addEventListener('click', event => {
                event.stopPropagation();
                event.target.classList.toggle('open')
            })

            li.classList.add('has-children')

            const subMenu = document.createElement('ul');

            childrens
                .map(buildTree)
                .forEach(li => subMenu.append(li))
                
            li.append(subMenu)
        }


        return li;
    }

    tree.append(menu);
}