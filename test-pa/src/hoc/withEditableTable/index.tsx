import React, { useCallback } from 'react';
import { Table } from 'antd';
import useEditTable from './hooks/useEditTable';
import withEditableCell from '../withEditCell';
import styled from 'styled-components';

const withEditableTable = (options: any) => {
    return () => {
        const {
            columns,
            data,
            pageSize,
            isSum,
            summary,
            replacementColumn,
            rowSelection,
            key,
            expandable,
            ...rest
        } = options || {};

        const {
            editingKey,
            isEditing,
            edit,
            cancel,
            save,
            handleDelete,
            mergedColumns,
            calculateColumnTotal,
        } = useEditTable({ ...options });

        const renderSummary = useCallback(() => {
            const columnTotals: any = calculateColumnTotal(data as any[], summary as string[]);
            const totalCell = (
                <Table.Summary.Cell key="total" index={Number("total")} colSpan={rowSelection ? 2 : 1} align="start">
                    Grand Total
                </Table.Summary.Cell>
            );

            return (
                <Table.Summary.Row>
                    {totalCell}
                    {(columns as any[] || []).map((column, index) => {
                        if (column.dataIndex === 'actions' || column.dataIndex === replacementColumn) {
                            return null;
                        }
                        return (
                            <Table.Summary.Cell key={column.dataIndex} index={column.dataIndex} align="end">
                                {columnTotals[column.dataIndex]}
                            </Table.Summary.Cell>
                        );
                    })}
                </Table.Summary.Row>
            );
        }, [columns, data, summary, calculateColumnTotal, replacementColumn, rowSelection]);

        return (
            <CustomTable
                {...rest}
                components={{
                    body: {
                        cell: (e: any) => {
                            return withEditableCell({ ...e, editingKey, isEditing, edit, cancel, save, handleDelete })
                        },
                    }
                }}
                key={key}
                rowSelection={rowSelection}
                expandable={expandable}
                size="small"
                scroll={{ x: 1300 }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    pageSize,
                    showSizeChanger: true,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                }}
                summary={() => isSum === true && renderSummary()}
            />
        )
    }
}
const CustomTable = styled(Table)((props) => {
    return {
        thead: {
            tr: {
                th: {
                    backgroundColor: '#73685d',
                }
            },
        },
    }
});
export default withEditableTable;